/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import $ from "jquery";

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

import {
  Search, ArrowBackIos, ArrowForwardIos, KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight
} from "../../libraries/mui/icons";

import * as Styled from "./styles";

interface Actions<T = any> { ref: string, callback: (rowData: T) => any }
type DataTableProps = {
  data: any[],
  columns: DataTables.ColumnSettings[],
  settings?: DataTables.Settings,
  actions?: Actions[],
  returnTable?: (table: DataTables.Api<any>) => void,
  returnClickedRow?: (clickedRow: JQuery<HTMLTableRowElement>) => void
}

const DataTable: React.FC<DataTableProps> = ({
  data, columns, settings, actions, returnTable, returnClickedRow
}) => {

  const tableRef = useRef<any>(null);
  const [table, setTable] = useState<DataTables.Api<any>>();

  // Render the Data Table
  useEffect(() => {

    // REVIEW need to redraw component (reorder button, input, etc.) after change resolution
    // Only render one time when screen has platform
    if (!table) {

      const tableSettings: DataTables.Settings = {
        responsive: true,
        data,
        columns,
        language: {
          paginate: {
            first: ReactDOMServer.renderToString(<KeyboardDoubleArrowLeft />),
            last: ReactDOMServer.renderToString(<KeyboardDoubleArrowRight />),
            next: ReactDOMServer.renderToString(<ArrowForwardIos />),
            previous: ReactDOMServer.renderToString(<ArrowBackIos />)
          },
          emptyTable: "Nenhum registro encontrado",
          info: "Mostrando de _START_ até _END_ de _TOTAL_ registros",
          infoEmpty: "Mostrando 0 até 0 de 0 registros",
          infoFiltered: "(Filtrados de _MAX_ registros)",
          lengthMenu: "_MENU_ Resultados por página",
          loadingRecords: "Carregando...",
          processing: "Processando...",
          zeroRecords: "Nenhum registro encontrado",
          search: ReactDOMServer.renderToString(<Search />),
          searchPlaceholder: "Buscar nos resultados"
        },
        scrollY: "450px",
        scrollX: false,
        scrollCollapse: true,
        autoWidth: true,
        // dom: generateDOM(),
        dom: "<div> </div>",
        buttons: []
      };

      const instanceTable = $(tableRef.current).DataTable({ ...tableSettings, ...settings });

      setTable(instanceTable);
      returnTable && returnTable(instanceTable);
    }

    return function cleanup() {
      if (table) table.destroy(true);
    };

  }, []);

  // Update data in Data Table when data is change
  useEffect(() => {

    const ref = tableRef.current;

    if (table) {

      table?.clear();
      table.rows.add(data);
      table.draw();
      table?.columns.adjust();

      if (actions && data) {

        returnTable && returnTable(table);

        actions.forEach((action) => {
          $(tableRef.current).on("click", `${action.ref}`, (event) => {

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
      $(ref).prop("onclick", null).off("click");
    };
  },
  // eslint-disable-next-line
  [data, table]);

  return (
    <Styled.Container>
      <table className="display cell-border hover row-border compact" width="100%" ref={tableRef} />
    </Styled.Container>
  );
};

DataTable.defaultProps = {
  actions: [],
  settings: {},
  returnTable: undefined,
  returnClickedRow: undefined
};

export default DataTable;
