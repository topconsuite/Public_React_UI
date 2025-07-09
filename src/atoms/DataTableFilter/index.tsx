/* eslint-disable react/no-array-index-key */

import React, { useCallback, useEffect, useState } from "react";

/** External libraries */
import * as _ from "lodash";
import Button from "../Button";
import { useToast } from "../../hooks/useToast/useToast";

/** Libraries */
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from "../../libraries/mui/components";
import { Close } from "../../libraries/mui/icons";
import {
  Actions, Container, Content, Fields, FormFilterField, InfoFilter, Title
} from "./styles";

import useTranslation from "../../hooks/useTranslation";
import { DataTableMessages } from "../../languages/interfaces/dataTableMessages";

const GlobalMessages = {
  save: "save"
};

/** Enums */
enum EFilterOperatorsType {
  EQUAL = "equal",
  NOT_EQUAL = "notEqual",
  GREATER_THAN = "greaterThan",
  GREATER_THAN_OR_EQUAL = "greaterThanOrEqual",
  LESS_THAN = "lessThan",
  LESS_THAN_OR_EQUAL = "lessThanOrEqual",
  CONTAINS = "contains",
  NOT_CONTAINS = "notContains",
  STARTS_WITH = "startsWith"
}

/** Interfaces */
export interface IFilterField {
  propName: string;
  visualName: string;
  operator?: IOperator | null;
  value?: string | number;
  toFilterValue?: ((data: unknown) => number | string) | null;
  filterTitle?: string;
}

interface IOperator {
  propName: EFilterOperatorsType;
  visualName: string;
}

interface IProps<T> {
  filterProperties: IFilterField[];
  filterData: T[];
  open: boolean;
  title: string;
  onClose: () => void;
  onFilter: (filteredData: T[]) => void;
}

const DataTableFilter: React.FC<IProps<unknown>> = ({
  filterProperties, filterData, open, onClose, onFilter, title
}) => {

  const { addToast } = useToast();
  const { t } = useTranslation();

  const operatorsControl = [
    { propName: EFilterOperatorsType.EQUAL, visualName: t(DataTableMessages.filterOperatorEquals) },
    { propName: EFilterOperatorsType.NOT_EQUAL, visualName: t(DataTableMessages.filterOperatorNotEquals) },
    { propName: EFilterOperatorsType.GREATER_THAN, visualName: t(DataTableMessages.filterOperatorGreaterThan) },
    { propName: EFilterOperatorsType.GREATER_THAN_OR_EQUAL, visualName: t(DataTableMessages.filterOperatorGreaterThanOrEqual) },
    { propName: EFilterOperatorsType.LESS_THAN, visualName: t(DataTableMessages.filterOperatorLessThan) },
    { propName: EFilterOperatorsType.LESS_THAN_OR_EQUAL, visualName: t(DataTableMessages.filterOperatorLessThanOrEqual) },
    { propName: EFilterOperatorsType.CONTAINS, visualName: t(DataTableMessages.filterOperatorContains) },
    { propName: EFilterOperatorsType.NOT_CONTAINS, visualName: t(DataTableMessages.filterOperatorNotContains) },
    { propName: EFilterOperatorsType.STARTS_WITH, visualName: t(DataTableMessages.filterOperatorStartsWith) }
  ];

  const [filterFields, setFilterFields] = useState<IFilterField[]>([]); // List of filter fields
  const [stateAccordion, setStateAccordion] = useState<{ [index: string]: boolean }>({}); // Accordion collapsed state
  const [stateOperators, setStateOperators] = useState<IOperator[]>(operatorsControl); // Operators to be used in
  // the filter

  /** Control event of collapse panels
   * @param key Panel id to change
   */
  const handleAccordion = useCallback((key: string) => {
    setStateAccordion({ ...stateAccordion, [key]: !stateAccordion[key] });
  }, [stateAccordion]);

  /** Remove all filter fields */
  const handleRemoveAllFilterFields = useCallback(() => {

    setStateAccordion({});
    setFilterFields([]);

  }, [setFilterFields]);

  /** Remove specific filter field */
  const handleRemoveFilterField = useCallback((index: number) => {

    const newFilterFields = [...filterFields];

    newFilterFields[index] = {} as IFilterField;

    setFilterFields(newFilterFields);

  }, [filterFields, setFilterFields]);

  /** Add new filter field (Empty) */
  const handleAddFilterField = useCallback(() => {

    let countFilters = 0;

    // Prevent add more filter fields than properties
    filterFields.forEach((filterProperty) => {
      if (!_.isEmpty(filterProperty)) countFilters += 1;
    });

    if (countFilters >= filterProperties.length) {

      addToast({ type: "info", title: "Número máximo de filtros atingido" });

      return;
    }

    setFilterFields((prevState) => [
      ...prevState, {
        value: "",
        propName: "",
        visualName: t(DataTableMessages.filterNewFilterField)
      }
    ]);

  }, [addToast, filterFields, setFilterFields, filterProperties, t]);

  /** Update existing filter field (With data) */
  const handleSubmitFormField = useCallback((event, index) => {

    event.preventDefault();

    const propName = event.target[`propName-${index}`].value;
    const propVisualName = propName && filterProperties.find((field) => (field.propName === propName))?.visualName;
    const propToFilterValue = filterProperties.find((field) => (field.propName === propName))?.toFilterValue || null;
    const operator = stateOperators.find(
      (_operator) => (_operator.propName === event.target[`operator-${index}`].value)
    );
    const content = event.target[`value-${index}`].value;

    // Validate all fields of this filter form
    if (!propName || !operator || !content) {

      // TODO: Add language for this message title
      addToast({ type: "info", title: "Todos os campos são obrigatórios", overwrite: true });

      return;
    }

    // Update filter fields
    setFilterFields((prevState) => prevState.map((_field, i) => {

      if (i === index) {
        return {
          propName,
          visualName: propVisualName,
          operator,
          value: content,
          toFilterValue: propToFilterValue
        };
      }

      return _field;
    }));

  }, [addToast, filterProperties, stateOperators, setFilterFields]);

  /** Filter data */
  const handleFilter = useCallback(() => {

    const filteredData = filterData.filter((data) => filterFields.every((filterField) => {

      if (_.isEmpty(filterField)) return true;

      const fieldValue = filterField.propName.split(".").reduce((obj, key) => obj[key] ?? "", data);
      const { operator, value, toFilterValue } = filterField;

      if (!operator || !value) return true;

      let fieldValueToFilter = fieldValue;

      if (toFilterValue) {
        fieldValueToFilter = toFilterValue(data);
      }

      switch (operator.propName) {

        case EFilterOperatorsType.EQUAL:
          return fieldValueToFilter === Number(value) ? Number(value) : value;
        case EFilterOperatorsType.NOT_EQUAL:
          return fieldValueToFilter !== Number(value) ? Number(value) : value;
        case EFilterOperatorsType.GREATER_THAN:
          return fieldValueToFilter > Number(value) ? Number(value) : value;
        case EFilterOperatorsType.GREATER_THAN_OR_EQUAL:
          return fieldValueToFilter >= Number(value) ? Number(value) : value;
        case EFilterOperatorsType.LESS_THAN:
          return fieldValueToFilter < Number(value) ? Number(value) : value;
        case EFilterOperatorsType.LESS_THAN_OR_EQUAL:
          return fieldValueToFilter <= Number(value) ? Number(value) : value;
        case EFilterOperatorsType.CONTAINS:
          return fieldValueToFilter.toString().toLowerCase().includes(value.toString().toLowerCase());
        case EFilterOperatorsType.NOT_CONTAINS:
          return !fieldValueToFilter.toString().toLowerCase().includes(value.toString().toLowerCase());
        case EFilterOperatorsType.STARTS_WITH:
          return fieldValueToFilter.toString().toLowerCase().startsWith(value.toString().toLowerCase());

        default:
          return true;
      }
    }));

    onFilter(filteredData);
    onClose();

  }, [filterData, filterFields, onFilter, onClose]);

  useEffect(() => {
    setStateOperators(operatorsControl);
  },
  // Execute only once
  // eslint-disable-next-line react-hooks/exhaustive-deps
  []);

  return (
    <Container anchor="right" open={open} onClose={onClose}>
      <Content>
        <Title>{t(DataTableMessages.filterTitle)}</Title>
        <InfoFilter>
          <div className="title">{t(DataTableMessages.filterApplied)}</div>
          <div className="content">{title}</div>
        </InfoFilter>
        <Fields>
          <div className="info">{t(DataTableMessages.filterCorrespondence)}</div>
          <div className="fields">
            {filterFields.length > 0 ? filterFields.map((filterField, index) => (
              !_.isEmpty(filterField) && (
                <Accordion
                  className="field"
                  key={`filter-field-${index}`}
                  expanded={stateAccordion[`filter-field-${index}`]}
                  onChange={() => handleAccordion(`filter-field-${index}`)}
                >
                  <AccordionSummary>
                    <div className="title">
                      <div className="field_name">{filterField.visualName}</div>
                      <div
                        className="field_icon--close"
                        aria-hidden="true"
                        onClick={() => handleRemoveFilterField(index)}
                      >
                        <Close />
                      </div>
                    </div>
                    <Typography>
                      <div className="content operator">{filterField.operator?.visualName}</div>
                      <div className="content">{filterField.value}</div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <FormFilterField onSubmit={(formData) => handleSubmitFormField(formData, index)}>
                      <FormControl className="default-field" fullWidth size="small">
                        <InputLabel id={`field-${index}`} className="input-label">{t(DataTableMessages.filterProperty)}</InputLabel>
                        <Select
                          labelId={`field-${index}`}
                          label={t(DataTableMessages.filterProperty)}
                          margin="dense"
                          variant="outlined"
                          defaultValue={filterField.propName || ""}
                          name={`propName-${index}`}
                        >
                          {filterProperties.map((prop) => (
                            <MenuItem
                              key={prop.propName}
                              value={prop.propName}
                              aria-label={prop.visualName}
                              disabled={!!filterFields.find((field) => (field.propName === prop.propName))}
                            >
                              {prop.filterTitle ?? prop.visualName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl className="default-field" fullWidth size="small">
                        <InputLabel id={`operator-${index}`} className="input-label">{t(DataTableMessages.filterOperator)}</InputLabel>
                        <Select
                          margin="dense"
                          labelId={`operator-${index}`}
                          label={t(DataTableMessages.filterOperator)}
                          variant="outlined"
                          defaultValue={filterField.operator?.propName || ""}
                          name={`operator-${index}`}

                        >
                          {stateOperators.map((operator) => (
                            <MenuItem key={operator.propName} value={operator.propName}>
                              {operator.visualName}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <TextField
                        label={t(DataTableMessages.filterValue)}
                        fullWidth
                        variant="outlined"
                        defaultValue={filterField.value || ""}
                        name={`value-${index}`}
                        className="default-field"
                        size="small"
                      />
                      <Button
                        disableRipple
                        text={t(GlobalMessages.save)}
                        type="submit"
                        className="default-submit-button"
                      />
                    </FormFilterField>
                  </AccordionDetails>
                </Accordion>
              )
            )) : (<div className="no-filter">{t(DataTableMessages.filterNoneApplied)}</div>)}
          </div>
        </Fields>
        <Actions>
          <Button disableRipple text={t(DataTableMessages.filterAdd)} onClick={() => handleAddFilterField()} />
          <Button
            disableRipple
            text={t(DataTableMessages.filterRemoveAll)}
            onClick={handleRemoveAllFilterFields}
          />
        </Actions>
        <Button className="default-submit-button" text={t(DataTableMessages.filterApply)} onClick={handleFilter} />
      </Content>
    </Container>
  );
};

export default DataTableFilter;
