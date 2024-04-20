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
  status: number;
};
