export enum Status {
  "New" = 1,
  "Follow Up Email" = 2,
  "Processing" = 3,
  "Interview" = 4,
  "Not Response" = 5,
  "Fail" = 6,
}

export type Application = {
  _id: String;
  companyName: String;
  position: String;
  applicationDate: String;
  jd: String;
  hrEmail: String;
  applyThrough: String;
  status: Status;
};
