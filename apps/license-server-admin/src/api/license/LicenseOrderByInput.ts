import { SortOrder } from "../../util/SortOrder";

export type LicenseOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  licenseKey?: SortOrder;
};
