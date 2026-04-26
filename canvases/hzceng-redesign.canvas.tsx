import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Grid,
  H1,
  H2,
  H3,
  Pill,
  Row,
  Stack,
  Stat,
  Text,
  useHostTheme,
} from "cursor/canvas";

const sections = [
  ["Hero", "Clarify the offer, show tri-state trust, and place consultation CTA above the fold."],
  ["Services", "Replace icon-only browsing with problem-aware service cards."],
  ["Why H&Z", "Turn generic claims into proof around code, speed, communication, and buildability."],
  ["Projects", "Use recent work as case studies with scope, challenge, and contribution."],
  ["Process", "Reduce friction by showing what happens after a prospect contacts H&Z."],
  ["Contact", "Close with direct phone, email, service area, hours, and a strong CTA."],
];

const serviceCards = [
  "Structural Design",
  "Renovations & Additions",
  "Special Inspections",
  "Engineering Assessments",
  "Construction Engineering",
  "Drafting / CAD",
  "Value Engineering",
];

export default function HzcengRedesignCanvas() {
  const theme = useHostTheme();

  return (
    <Stack gap={22}>
      <Stack gap={8}>
        <Row gap={8} wrap>
          <Pill active tone="info">H&Z Consulting Engineering</Pill>
          <Pill>Website Redesign</Pill>
          <Pill>Conversion Focused</Pill>
        </Row>
        <H1>Modern structural engineering website direction</H1>
        <Text tone="secondary">
          A premium, blue-led redesign that makes H&Z feel precise, trusted, and easy to contact for renovations,
          new developments, inspections, and structural review work.
        </Text>
      </Stack>

      <Grid columns={4} gap={12}>
        <Stat value="NY / NJ / CT" label="License proof near CTAs" tone="info" />
        <Stat value="10+" label="Years of structural experience" />
        <Stat value="7" label="Service cards on homepage" />
        <Stat value="3+" label="Consultation paths repeated" tone="success" />
      </Grid>

      <Divider />

      <H2>Visual System</H2>
      <Grid columns="1.2fr 1fr" gap={14}>
        <Card size="lg">
          <CardHeader trailing={<Pill size="sm" tone="info" active>Primary</Pill>}>Brand Look</CardHeader>
          <CardBody>
            <Stack gap={10}>
              <H3>Clean, technical, premium</H3>
              <Text>
                Keep the current H&Z blue, then support it with warm white, deep navy, structural slate,
                soft steel, and light mist-blue surfaces.
              </Text>
              <Text tone="secondary">
                Use blueprint grid details, CAD labels, real project imagery, generous spacing, and crisp
                typography to create a serious engineering studio feel.
              </Text>
            </Stack>
          </CardBody>
        </Card>

        <Card size="lg">
          <CardHeader>Core UI Rules</CardHeader>
          <CardBody>
            <Stack gap={8}>
              <Text>Floating header with persistent consultation CTA.</Text>
              <Text>Pill buttons with subtle arrow movement.</Text>
              <Text>Layered cards with light borders and restrained depth.</Text>
              <Text>No small text over background images.</Text>
              <Text>Mobile-first CTAs for call and consultation.</Text>
            </Stack>
          </CardBody>
        </Card>
      </Grid>

      <H2>Homepage Flow</H2>
      <TableLikeSection themeColor={theme.fill.secondary} />

      <H2>Service Emphasis</H2>
      <Grid columns={3} gap={10}>
        {serviceCards.map((service) => (
          <Card key={service}>
            <CardHeader>{service}</CardHeader>
            <CardBody>
              <Text tone="secondary">
                Frame this around the customer problem, expected engineering outcome, and next step.
              </Text>
            </CardBody>
          </Card>
        ))}
      </Grid>

      <Divider />

      <H2>Primary Copy Direction</H2>
      <Stack gap={10}>
        <Text weight="semibold">
          Structural engineering for renovations, new developments, and special inspections.
        </Text>
        <Text tone="secondary">
          H&Z Consulting Engineering helps homeowners, architects, contractors, and developers move from concept
          to construction with code-compliant structural design, clear communication, and buildable solutions across
          NY, NJ, and CT.
        </Text>
      </Stack>

      <Card>
        <CardHeader trailing={<Pill size="sm" tone="success" active>Next Build Pass</Pill>}>Implementation Order</CardHeader>
        <CardBody>
          <Text>
            Start with the header and hero, rebuild services into cards, turn Why H&Z into proof, expand projects
            into case studies, add process, then finish with a high-contrast contact section.
          </Text>
        </CardBody>
      </Card>
    </Stack>
  );
}

function TableLikeSection({ themeColor }: { themeColor: string }) {
  return (
    <Stack gap={8}>
      {sections.map(([name, purpose], index) => (
        <div
          key={name}
          style={{
            display: "grid",
            gridTemplateColumns: "88px 1fr",
            gap: 12,
            alignItems: "start",
            padding: 12,
            borderRadius: 12,
            background: index % 2 === 0 ? themeColor : "transparent",
          }}
        >
          <Text weight="semibold" tone="primary">{name}</Text>
          <Text tone="secondary">{purpose}</Text>
        </div>
      ))}
    </Stack>
  );
}
