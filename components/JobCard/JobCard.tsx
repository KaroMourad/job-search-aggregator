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

function JobCard(props: JobCardProps) {
  const { job, className = "" } = props;
  return (
    <Card className={`flex flex-col ${className}`}>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
        <CardDescription>{job.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground font-semibold">{job.company}</p>
        <p className="text-muted-foreground text-sm">{job.location}</p>
        {job.salary && <p className="mt-2 font-semibold">{job.salary} Annual</p>}
      </CardContent>
      <CardFooter className="justify-end mt-auto">
        <Button variant={"default"} className="mt-4" asChild>
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
  );
}

JobCard.displayName = "JobCard";
export default JobCard;
