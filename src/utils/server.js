import { DEV_SERVER, PROD_SERVER, TEST_SERVER } from '../config/config.json'

export const setServerUrl = (host) => {
  let server
  switch (host) {
    case 'test-front-app-meister-highschool-webinar.endpoint.ainize.ai':
      server = `${DEV_SERVER}`
      break
    case 'master-backend-meister-highschool-webinar.endpoint.ainize.ai':
    case 'www.sw-webinar.com':
      server = `${PROD_SERVER}`
      break
    default:
      server = `${TEST_SERVER}`
  }
  return server
}