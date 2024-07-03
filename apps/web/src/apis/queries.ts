import { UseQueryOptions, useQuery } from "@tanstack/react-query"
import { getProjects } from "./request"
import { ICategory } from "./types"

export const useProjects = (option?: UseQueryOptions<ICategory[], Error>) => {
  return useQuery<ICategory[], Error>({
    queryKey: ['project'],
    queryFn: () => getProjects(),
    ...option
  })
}