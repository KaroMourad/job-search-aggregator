import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { JobCardProps } from "./JobCard.types";
import { ErrorBoundary } from "../ErrorBoundary";

function JobCard(props: JobCardProps) {
  const { job, className = "" } = props;
  return (
    <ErrorBoundary>
      <Card className={`flex flex-col p-6 ${className}`}>
        <CardHeader className="p-0 pb-6">
          <CardTitle>{job.title}</CardTitle>
          <CardDescription>
            {job.description.substring(0, 70)}...
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0 pb-4">
          <p className="text-foreground font-semibold">{job.company}</p>
          <p className="text-muted-foreground text-sm">{job.location}</p>
          {job.salary && (
            <p className="mt-2 text-sm font-semibold">{job.salary} Annual</p>
          )}
        </CardContent>
        <CardFooter className="justify-end mt-auto p-0">
          <Button variant={"default"} asChild size={"sm"}>
            <Link
              href={job.applicationUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Apply Now
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </ErrorBoundary>
  );
}

JobCard.displayName = "JobCard";
export default JobCard;
