import { InjectionToken } from "@angular/core";
import { environment } from "src/environments/environments";
import { AppConfig } from "./appconfig.interface";

export const APP_SERVICE_CONFIG = new InjectionToken<AppConfig>('app_config');

export const APP_CONFIG: AppConfig = {
    apiEndpoint: environment.apiEndpoint,
};