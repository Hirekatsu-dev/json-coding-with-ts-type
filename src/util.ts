import _ from "lodash";

export function toSnakeCase(value: string) {
  return _.snakeCase(value);
}

export function toUpperSnakeCase(value: string) {
  return _.snakeCase(value).toUpperCase();
}

export function toPascalCase(value: string) {
  return _.upperFirst(toCamelCase(value));
}

export function toCamelCase(value: string) {
  return _.camelCase(value);
}
