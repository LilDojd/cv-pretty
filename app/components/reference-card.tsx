import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";

interface Props {
  name: string;
  title: string;
  contact: string;
  company: string;
  description: string;
}

export function ReferenceCard({
  name,
  title,
  contact,
  company,
  description,
}: Props) {
  return (
    <Card className="border-muted flex flex-col rounded-lg border p-3 shadow-sm print:shadow-none">
      <CardHeader className="mb-4 border-b border-gray-200 pb-4">
        <CardTitle className="text-base text-lg font-semibold">
          {name}
        </CardTitle>
        <CardDescription className="font-mono text-sm">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <dl className="text-sm font-medium">
          <div className="flex justify-between py-2">
            <dt className="font-mono">Title:</dt>
            <dd className="text-base">{title}</dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="font-mono">Contact:</dt>
            <dd className="text-base">
              <a href={`mailto:${contact}`}>{contact}</a>
            </dd>
          </div>
          <div className="flex justify-between py-2">
            <dt className="font-mono">Company:</dt>
            <dd className="text-base">{company}</dd>
          </div>
        </dl>
      </CardContent>
    </Card>
  );
}
