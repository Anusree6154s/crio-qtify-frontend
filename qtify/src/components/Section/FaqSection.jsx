import { ExpandMore } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Stack,
    Typography
} from "@mui/material";
import styles from "./Section.module.css";

export default function FaqSection({ title, data }) {
  return (
    <Stack sx={{ mb: 6, mx: { xs: 2, sm: 10 } }} spacing={2}>
      <Typography component="h2">{title}</Typography>

      <Stack className={styles.faqContainer} spacing={1}>
        {data?.map((faq, index) => (
          <Accordion key={index} className={styles.faqAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMore sx={{ color: "var(--color-primary)" }} />}
              aria-controls="panel1-content"
              id="panel1-header"
              className={styles.faqAccordionSummary}
            >
              {faq.question}
            </AccordionSummary>
            <AccordionDetails className={styles.faqAccordionDetails}>
              {faq.answer}
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </Stack>
  );
}
