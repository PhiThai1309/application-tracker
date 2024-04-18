export enum Status {
  "New" = 1,
  "Follow Up Email" = 2,
  "Processing" = 3,
  "Interview" = 4,
  "Not Response" = 5,
  "Fail" = 6,
}

export enum ApplicationEnum {
  companyName = "Company Name",
  position = "Position",
  applicationDate = "Application Date",
  jd = "JD",
  hrEmail = "HR Email",
  applyThrough = "Apply Through",
  status = "Status",
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
