import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

const YAML_CONFIG_FILENAME =
  process.env['NODE_ENV'] === 'production'
    ? '../etc/config.yaml'
    : '../etc/local.yaml';
let config: Config;
export interface Config {
  db: {
    type: 'mysql';
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
  };
  cache: {
    username: string;
    host: string;
    port: number;
    password: string;
  };
  open_create: boolean;
}
export default () => {
  config = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Config;
  return config;
};

export function getDBConfig() {
  return config.db;
}

export function getCacheConfig() {
  return config.cache;
}

export function getOpenCreate() {
  return config.open_create;
}

// export const OPEN_CREATE = process.env.OPEN_CREATE;
