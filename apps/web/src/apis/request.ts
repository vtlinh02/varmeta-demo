import { ICategory, request } from "."

export const getProjects = async (): Promise<ICategory[]> => {
  return await request({
    url: '/',
    method: "GET"
  })
}