/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/ban-types */

import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";

// region Third-party libraries
import $ from "jquery";
import * as _ from "lodash";

// endregion
// region Data table libraries
import "datatables.net";
import "datatables.net-buttons";
import "datatables.net-buttons/js/buttons.print.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-dt";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
// DataTables types will be used from global namespace
// endregion Data table libraries
// region Atoms
// import { DefaultTheme } from "styled-components";
import { Badge } from "@mui/material";
// import { Provider } from "jotai";
import { ToastProvider } from "@/hooks/useToast/useToast";
import DataTableFilter, { IFilterField } from "../../atoms/DataTableFilter";
// endregion Atoms
// region Styles
// import usePersistedState from "../../hooks/usePersistedState";
import useTheme from "../../hooks/useTheme";
import { Container, Buttons } from "./styles";
import { SpeedDialMenu } from "../../atoms";
import SpeedDial from "../SpeedDial";
import {
  Add, ArrowBackIos, ArrowForwardIos, FilterList, KeyboardArrowLeft, KeyboardArrowRight, PriorityHigh, Search, ViewWeekRounded
} from "../../libraries/mui/icons";
import useTranslation from "../../hooks/useTranslation";
import { DataTableMessages } from "../../languages/interfaces/dataTableMessages";
// endregion Styles

// region Interfaces
export interface DataTableActions<T = unknown> {
  ref: string,
  callback: (rowData: T) => void
}

// endregion Interfaces
// region Types
export type DataTableButtons = Partial<DataTables.ButtonsSettings> & { key: string, name: string, callback?: () => void }
export type DataTableColumns = DataTables.ColumnSettings & {
  filterable: boolean,
  propertyName?: string,
  toFilterValue?: ((data: unknown) => number | string) | null,
  filterTitle?: string
}
type DataTableProps = {
  data: unknown[],
  columns: DataTableColumns[],
  settings?: DataTables.Settings,
  actions?: DataTableActions[],
  buttons?: DataTableButtons[],
  buttonsChildren?: React.ReactNode,
  filters?: boolean,
  editColumns?: boolean,
  title?: string,
  use?: "maintenanceScreen" | "dialogScreen",
  width?: string,
  showPaging?: boolean,
  showInfo?: boolean,
  showSearching?: boolean,
  returnTable?: (table: DataTables.Api<unknown>) => void,
  returnClickedRow?: (clickedRow: JQuery<HTMLTableRowElement>) => void,
  onClickFilterButton?: () => void,
  numberOfFilteredOptions?: number
}
// endregion Types

const NewDataTable: React.FC<DataTableProps> = ({
  data: dataProp,
  columns,
  settings,
  actions,
  buttons,
  buttonsChildren,
  filters,
  editColumns,
  title,
  use = "maintenanceScreen",
  returnTable,
  returnClickedRow,
  width,
  showInfo,
  showPaging,
  showSearching,
  onClickFilterButton,
  numberOfFilteredOptions
}) => {

  // region Refs
  const tableRef = useRef<HTMLTableElement>(null);
  // endregion Refs
  // region Hooks
  // const [theme] = usePersistedState<DefaultTheme>("@Fleet:theme", '');
  const { theme } = useTheme();

  const { t } = useTranslation();
  // endregion Hooks
  // region States
  const [table, setTable] = useState<DataTables.Api<unknown>>();
  const [dataFiltered, setDataFiltered] = useState<unknown[]>([]);
  const [openSpeedDialActionMenus, setOpenSpeedDialActionMenus] = useState(false);
  const [openFilterFields, setOpenFilterFields] = useState(false);
  const [dataLength, setDataLength] = useState(dataProp.length);
  // endregion States

  // region Filter state control
  const [filterableColumns] = useState(columns.filter((column) => column.filterable));
  const [filterProperties] = useState<IFilterField[]>(filterableColumns.map((column) => ({
    propName: column.propertyName, visualName: column.title, toFilterValue: column.toFilterValue, filterTitle: column.filterTitle
  } as IFilterField)));
  // endregion Filter state control
  // region Filter menus handlers
  const handleOpenFilterFields = () => {
    if (onClickFilterButton) {
      onClickFilterButton();

      return;
    }

    setOpenFilterFields(true);
  };
  const handleCloseFilterFields = () => { setOpenFilterFields(false); };
  // endregion Filter menus handlers
  // region Filter table handler
  const handleFilterFields = (filteredData: unknown[]) => {

    setDataFiltered(filteredData);

    // If filtered data is equal to original data, then reset filtered data
    // (Hide badge active filter)
    if (filteredData.length === dataProp.length) {
      setDataFiltered([]);
    }
  };
  // endregion Filter table handler

  // region Speed dial action menus handlers
  const handleOpenActionMenusSpeedDial = () => { setOpenSpeedDialActionMenus(true); };
  const handleCloseActionMenusSpeedDial = () => { setOpenSpeedDialActionMenus(false); };
  const handleClickActionMenuSpeedDial = (menuCallback?: (() => void) | undefined) => {

    if (menuCallback) {
      menuCallback();
    }

    handleCloseActionMenusSpeedDial();
  };
  // endregion Speed dial action menus handlers

  // region Effects

  // Render the Data Table
  // PS: If language changes, the table will be reloaded
  useEffect(() => {

    const initialTableSettings: DataTables.Settings = {};

    if (table) initialTableSettings.destroy = true;

    // REVIEW need to redraw component (reorder button, input, etc.) after change resolution
    // Only render one time when screen has platform
    if (!table || initialTableSettings.destroy) {

      const tableSettings: DataTables.Settings = {
        ...initialTableSettings,
        responsive: true,
        data: !_.isEmpty(dataFiltered) ? dataFiltered : dataProp,
        columns,
        info: showInfo,
        paging: showPaging,
        searching: showSearching,
        language: {
          paginate: {
            first: ReactDOMServer.renderToString(<KeyboardArrowLeft />),
            last: ReactDOMServer.renderToString(<KeyboardArrowRight />),
            next: ReactDOMServer.renderToString(<ArrowForwardIos />),
            previous: ReactDOMServer.renderToString(<ArrowBackIos />)
          },
          emptyTable: t(DataTableMessages.emptyTable),
          info: t(DataTableMessages.info),
          infoEmpty: t(DataTableMessages.infoEmpty),
          infoFiltered: `<br>${t(DataTableMessages.infoFiltered)}`,
          lengthMenu: t(DataTableMessages.lengthMenu),
          loadingRecords: t(DataTableMessages.loadingRecords),
          processing: t(DataTableMessages.processing),
          zeroRecords: t(DataTableMessages.zeroRecords),
          search: ReactDOMServer.renderToString(<Search />),
          searchPlaceholder: t(DataTableMessages.searchPlaceholder)
        },
        scrollY: "calc(100vh - 395px)",
        scrollX: false,
        scrollCollapse: true,
        autoWidth: true,
        dom: (() => {

          const gridHeader = "MuiGrid-root MuiGrid-item MuiGrid-grid-xs filterGrid";
          const gridFooter = showPaging ? "MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6" : "";
          const gridFilter = filters || editColumns ? `<"${gridHeader} dataTables_filter">` : "";
          const container = "MuiGrid-root MuiGrid-container";

          return `
            <"${container} dataTables_search"
              <"${gridHeader}"f >
              ${gridFilter}
            >
              rt
            ${!showPaging ? "<div />" : `
              <"${container} fixed--bottom"
              <"${gridFooter} MuiGrid-direction-xs-column"
                <"${gridFooter}"l>
                <"${gridFooter}"i>
              >
                <"${gridFooter}"p>
                <"${gridFooter} flex--center flex--hidden"B>
              >
            `}
          `;
        })(),
        buttons: buttons ?? []
      };

      const instanceTable = ($(tableRef.current!) as JQuery).DataTable({ ...tableSettings, ...settings });

      setTable(instanceTable);
      returnTable && returnTable(instanceTable);
    }

  },
  // This effect is called when language changes or initial render
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [t, columns, showInfo, showPaging, showSearching, buttons]);

  useEffect(() => {
    if (dataProp.length > dataLength) {
      table?.clear();
      table?.rows.add(dataProp).draw(false);
    } else {
      table?.clear();
      table?.rows.add(dataProp);
      table?.draw();
      table?.columns.adjust();
    }
    setDataLength(dataProp.length);
  }, [dataProp, dataLength, table]);

  // Update data in Data Table when data is change
  useEffect(() => {
    const ref = tableRef.current;
    const dataToLoad = !_.isEmpty(dataFiltered) ? dataFiltered : dataProp;

    if (table) {
      table.clear();
      table.rows.add(dataToLoad);
      table.draw();
      table?.columns.adjust();

      if (actions && dataToLoad) {

        returnTable && returnTable(table);

        actions.forEach((action) => {
          ($(tableRef.current!) as JQuery).on("click", `${action.ref}`, (event: JQuery.ClickEvent) => {
            if ($(event.currentTarget).parents("tr").hasClass("child")) {
              action.callback(table.row($(event.currentTarget).parents("tr").prev("tr")).data());
              returnClickedRow && returnClickedRow($(event.currentTarget).parents("tr").prev("tr"));
            } else {
              action.callback(table.row($(event.currentTarget).parents("tr")).data());
              returnClickedRow && returnClickedRow($(event.currentTarget).parents("tr"));
            }
          });
        });
      }
    }

    // REVIEW The code behaves strangely, needing to call the function twice to adjust the size of the columns
    table?.columns.adjust();

    return function cleanUp() {
      if (ref) {
        ($(ref) as JQuery).prop("onclick", null).off("click");
      }
    };

  },
  // No more deps are necessary
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [dataFiltered, table]);

  // Search input expand/collapse functionality
  useEffect(() => {
    if (table && showSearching && tableRef.current) {
      const searchIcon = ($(tableRef.current) as JQuery).closest(".dataTables_wrapper").find(".dataTables_filter svg");
      const searchInput = ($(tableRef.current) as JQuery).closest(".dataTables_wrapper").find(".dataTables_filter input");
      const searchLabel = ($(tableRef.current) as JQuery).closest(".dataTables_wrapper").find(".dataTables_filter label");

      let isExpanded = false;

      const toggleSearch = (event: JQuery.ClickEvent) => {
        event.preventDefault();
        event.stopPropagation();

        if (!isExpanded) {
          // Expand
          searchInput.addClass("expanded");
          searchLabel.addClass("search-active");
          searchInput.focus();
          isExpanded = true;
        } else if (searchInput.val() === "") {
          // Collapse only if input is empty
          searchInput.removeClass("expanded");
          searchLabel.removeClass("search-active");
          isExpanded = false;
        }
      };

      const handleClickOutside = (event: JQuery.ClickEvent) => {
        if (!$(event.target).closest(".dataTables_filter").length && searchInput.val() === "") {
          searchInput.removeClass("expanded");
          searchLabel.removeClass("search-active");
          isExpanded = false;
        }
      };

      // Add click event to search icon
      searchIcon.on("click", toggleSearch);

      // Add click outside event
      $(document).on("click", handleClickOutside);

      return () => {
        searchIcon.off("click", toggleSearch);
        $(document).off("click", handleClickOutside);
      };
    }

    return undefined;
  }, [table, showSearching]);

  // endregion Effects

  return (
    <ToastProvider>
      <Container use={use} filters={filters} editColumns={editColumns} buttonsCount={buttons?.length || 0}>
        {filters && (
        <Badge
          badgeContent={!_.isEmpty(dataFiltered) ? <PriorityHigh /> : numberOfFilteredOptions ?? 0}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          className="filter-button"
          color="error"
          onClick={handleOpenFilterFields}
        >
          <FilterList className="filter-icon" />
        </Badge>
        )}
        {editColumns && (
        <Badge
          badgeContent={!_.isEmpty(dataFiltered) ? <PriorityHigh /> : 0}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          className="filter-button"
          color="error"
          onClick={handleOpenFilterFields}
        >
          <ViewWeekRounded />
        </Badge>
        )}
        <table className="display cell-border hover row-border compact" width={width} ref={tableRef} />
        {buttons && buttons.length > 0 && (
        <Buttons>
          <SpeedDial
            primaryColor={theme.colors.primary}
            secondColor={theme.colors.background}
            size="medium"
            icon={<Add fontSize="large" />}
            open={openSpeedDialActionMenus}
            onOpen={handleOpenActionMenusSpeedDial}
            onClose={handleCloseActionMenusSpeedDial}
          >
            {buttons.map((menu) => (
              <SpeedDialMenu
                key={menu.key}
                menu={{ id: menu.key, title: menu.name }}
                colorOnHover={theme.colors.background}
                onClick={() => handleClickActionMenuSpeedDial(menu.callback)}
              />
            ))}
          </SpeedDial>
        </Buttons>
        )}
        {(!buttons || buttons.length === 0) && buttonsChildren && (
        <Buttons>
          {buttonsChildren}
        </Buttons>
        )}
        {filters && !onClickFilterButton && (
        <DataTableFilter
          title={title!}
          filterData={dataProp}
          filterProperties={filterProperties}
          open={openFilterFields}
          onClose={handleCloseFilterFields}
          onFilter={(filteredData) => handleFilterFields(filteredData)}
        />
        )}
      </Container>
    </ToastProvider>
  );
};

export default NewDataTable;
