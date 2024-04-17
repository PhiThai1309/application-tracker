export enum Status {
  "New" = 1,
  "Follow Up Email" = 2,
  "Processing" = 3,
  "Interview" = 4,
  "Not Response" = 5,
  "Fail" = 6,
}

export enum ApplicationEnum {
  companyName = "companyName",
  position = "position",
  applicationDate = "applicationDate",
  jd = "jd",
  hrEmail = "hrEmail",
  applyThrough = "applyThrough",
  status = "status",
}

export type Application = {
  _id: String | null;
  companyName: String;
  position: String;
  applicationDate: String;
  jd: String;
  hrEmail: String;
  applyThrough: String;
  status: Status;
};
