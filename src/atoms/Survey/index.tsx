import React, { useEffect, useState } from "react";
import { SurveyPlatform } from "../../store/global.enum";
import { ISurveyAdditionalInfo, openZohoSurvey } from "./ZohoSurveyScript";

interface SurveyProps {
  surveyPlatform: SurveyPlatform;
  surveyId: string;
  additionalInfo?: ISurveyAdditionalInfo;
  email: string;
  loading?: boolean;
}

const Survey: React.FC<SurveyProps> = ({
  surveyPlatform,
  surveyId,
  additionalInfo,
  email,
  loading: loadingProp
}) => {

  const [loading, setLoading] = useState(loadingProp);

  useEffect(() => {

    if (loading) return;

    setLoading(true);

    switch (surveyPlatform) {
      case SurveyPlatform.ZOHO:
        openZohoSurvey(surveyId, email, additionalInfo);
        break;
      default:
        throw new Error("Survey platform not supported");
    }

  }, [email, loading]);

  return <></>;
};

Survey.defaultProps = {
  loading: false,
  additionalInfo: undefined
};

export default Survey;
