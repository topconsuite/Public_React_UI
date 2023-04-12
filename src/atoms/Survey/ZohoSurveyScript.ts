const w = window;
const zsBaseUrl = "https://survey.zohopublic.com";
const zsInterceptKey = "zs_intercept";

export interface ISurveyAdditionalInfo {
  [key: string]: string;
}

const zsIntercept = (...args: unknown[]) => {
  (w[zsInterceptKey].p = w[zsInterceptKey].p || []).push(args);
};

export const openZohoSurvey = (surveyId: string, email: string, additionalInfo?: ISurveyAdditionalInfo): void => {

  w[zsInterceptKey] = w[zsInterceptKey] || zsIntercept;

  const route = `/api/v1/public/livesurveys/${surveyId}/popup/script`;
  let query = `email=${email}`;

  if (additionalInfo) {
    Object.keys(additionalInfo)
      .forEach((key) => {
        query += `&${key}=${additionalInfo[key]}`;
      });
  }

  setTimeout(() => {

    const script = document.createElement("script");

    script.async = true;
    script.src = `${zsBaseUrl}${route}`;

    document.body.appendChild(script);

    zsIntercept(zsBaseUrl, `${surveyId}?${query}`, {
      minHeight: 450,
      heightType: 1,
      maxHeight: 700,
      hideEndPage: true
    });

  }, 5000);
};
