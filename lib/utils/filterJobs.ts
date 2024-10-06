import { Job } from "@/types/Job";

/**
 * Filter jobs based on the filters provided
 * @param items The list of jobs to filter
 * @param filters The filters to apply
 * @returns The filtered list of jobs
 */
export function filterJobs(
  items: Job[],
  filters: Record<string, string>
): Job[] {
  return items.filter((item) => {
    return Object.keys(filters).every((key) => {
      const filterValue = filters[key];
      if (!filterValue) return true;

      const itemValue = item[key as keyof Job];
      return (
        itemValue &&
        itemValue.toString().toLowerCase().includes(filterValue.toLowerCase())
      );
    });
  });
}
