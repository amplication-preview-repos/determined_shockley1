import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LicenseWhereInput = {
  id?: StringFilter;
  licenseKey?: StringNullableFilter;
};
