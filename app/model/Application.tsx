export type Status = {
  new: "new";
  followUpEmail: "followUpEmail";
  processing: "processing";
  interview: "interview";
  notResponse: "Not Response";
  fail: "fail";
};

export type Application = {
  _id: String;
  companyName: String;
  position: String;
  applicationDate: { type: Date; default: Date };
  jd: String;
  hrEmail: String;
  applyThrough: String;
  status: { type: Status; default: Status };
};
