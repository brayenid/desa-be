import { RateLimit } from 'koa2-ratelimit'
import type { Core } from '@strapi/strapi'
import { Context, Next } from 'koa'

export default (_config: any, {}: { strapi: Core.Strapi }) => {
  return async (ctx: Context, next: Next) => {
    return RateLimit.middleware({
      interval: { min: 1 }, // 1 minute
      max: 500, // limit each IP to 500 requests per minute
      message: 'Too many requests, please try again later.',
      headers: true
    })(ctx, next)
  }
}
