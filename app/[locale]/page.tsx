import { ProjectCard } from "@/app/components/project-card";
import Section from "@/app/components/section";
import ToolBar from "@/app/components/toolbar";
import LanguageBadge from "@/app/components/ui/language-badge";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { getData } from "@/data";
import { getI18n, getStaticParams } from "@/locales/server";
import { format } from "date-fns";
import { Globe } from "lucide-react";
import { setStaticParamsLocale } from "next-international/server";
import Image from "next/image";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);

  const t = await getI18n();
  const data = getData();

  return (
    <main className="container mb-6 max-w-2xl space-y-8 px-10 pb-16 pt-10 sm:py-16 print:mb-0 print:py-6">
      <section>
        <p className="text-muted-foreground mb-4 text-right text-sm italic">
          <time>{format(new Date(data.lastUpdatedAt), "yyyy-MM-dd")}</time>
        </p>
        <div className="flex flex-col gap-6 sm:flex-row">
          <div>
            <Image
              src={data.avatarUrl}
              alt=""
              width={112}
              height={112}
              className="rounded-xl"
            />
          </div>
          <div className="*:leading-none">
            {data.globalName && (
              <p className="text-muted-foreground mb-2 text-xs">
                {data.globalName}
              </p>
            )}
            <h1 className="mb-3 text-2xl font-bold">{data.name}</h1>
            <p className="text-muted-foreground mb-3 font-mono">{data.bio}</p>
            <p className="text-muted-foreground flex items-center gap-1 text-sm">
              <Globe size={14} />
              {data.location}
            </p>
          </div>
        </div>
      </section>

      <Section title={t("about")}>
        <p className="text-muted-foreground text-pretty font-mono text-base leading-relaxed">
          {data.summary}
        </p>
      </Section>

      <Section title={t("workExperience")}>
        {data.work.map((work) => {
          return (
            <Card key={work.company} className="print:shadow-none">
              <CardHeader>
                <div className="text-muted-foreground text-right text-sm tabular-nums sm:hidden">
                  {work.start} - {work.end}
                </div>
                <div className="flex items-center justify-between gap-x-2">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    {work.link ? (
                      <a
                        className="hover:underline"
                        target="_blank"
                        href={work.link}
                      >
                        {work.company}
                      </a>
                    ) : (
                      work.company
                    )}

                    <span className="hidden gap-x-1 sm:inline-flex">
                      {work.badges.map((badge) => (
                        <Badge variant="secondary" key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-muted-foreground hidden text-sm tabular-nums sm:block">
                    {work.start} - {work.end}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none">{work.title}</h4>

                {work.badges.length > 0 && (
                  <div className="contents">
                    <div className="mt-4 flex gap-1 sm:hidden">
                      {work.badges.map((badge) => (
                        <Badge variant="secondary" key={badge}>
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent className="text-muted-foreground font-mono text-sm">
                {work.description}
              </CardContent>
            </Card>
          );
        })}
      </Section>

      {data.education.length > 0 && (
        <Section title={t("education")} avoidPageBreak>
          {data.education.map((education) => {
            return (
              <Card key={education.school} className="print:shadow-none">
                <CardHeader>
                  <div className="text-muted-foreground text-right text-sm tabular-nums sm:hidden">
                    {education.start} - {education.end}
                  </div>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-muted-foreground hidden text-sm tabular-nums sm:block">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-muted-foreground font-mono text-sm">
                  {education.degree}
                </CardContent>
              </Card>
            );
          })}
        </Section>
      )}

      <Section title={t("languages")} avoidPageBreak>
        <div className="flex flex-wrap justify-start gap-2">
          <div className="flex flex-wrap gap-1">
            {data.languages
              .filter((language) => language.type === "programming")
              .map((language) => (
                <LanguageBadge key={language.name} language={language} />
              ))}
            {data.languages
              .filter((language) => language.type === "spoken")
              .map((language) => (
                <LanguageBadge
                  key={language.name}
                  language={language}
                  isSpoken
                />
              ))}
          </div>
        </div>
      </Section>

      <Section title="Skills">
        <div className="flex flex-wrap gap-1">
          {data.skills.flatMap((skill) =>
            skill.stack.map((technology) => {
              const skillTypeToColor = {
                bio: "bg-green-300/80",
                ml: "bg-sky-300/80",
                dev: "bg-blue-300/80",
                visualization: "bg-violet-300/80",
                soft: "bg-pink-300/80",
              };
              const skillTypeHoverColor = {
                bio: "hover:bg-green-200",
                ml: "hover:bg-sky-200",
                dev: "hover:bg-blue-200",
                visualization: "hover:bg-violet-200",
                soft: "hover:bg-pink-200",
              };

              const colorClass: string =
                skillTypeToColor[skill.type as keyof typeof skillTypeToColor] ||
                "bg-primary";
              const hoverColorClass =
                skillTypeHoverColor[
                  skill.type as keyof typeof skillTypeHoverColor
                ] || "hover:bg-primary";
              return (
                <Badge
                  key={`${skill.type}-${technology}`}
                  className={`${hoverColorClass} print:text-secondary-foreground text-secondary-foreground dark:text-primary-foreground ${colorClass}`}
                >
                  {technology}
                </Badge>
              );
            }),
          )}
        </div>
      </Section>

      <Section title={t("projects")}>
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {data.projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Section>

      <Section title={t("contacts")} avoidPageBreak>
        <div className="flex flex-wrap gap-2">
          {data.contacts.map((contact) => (
            <Button size="sm" key={contact.href} variant="secondary" asChild>
              <a href={contact.href} target="_blank">
                <contact.icon className="mr-2" size={15} />
                {contact.label}
                <span className="hidden print:block">
                  : {contact.href.replace(/mailto:|tel:/, "")}
                </span>
              </a>
            </Button>
          ))}
        </div>
      </Section>

      <div className="print:hidden">
        <ToolBar data={data} />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return getStaticParams();
}
