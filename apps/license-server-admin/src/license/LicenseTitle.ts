import { License as TLicense } from "../api/license/License";

export const LICENSE_TITLE_FIELD = "licenseKey";

export const LicenseTitle = (record: TLicense): string => {
  return record.licenseKey?.toString() || String(record.id);
};
