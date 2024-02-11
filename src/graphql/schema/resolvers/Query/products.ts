import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db.js";

export const products: NonNullable<QueryResolvers["products"]> = async (
  _parent,
  arg,
  _ctx,
) => {
  return await prisma.product.findMany();
};
