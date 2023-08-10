export function cleanUpSummary(summary: string): string {
  return summary.replaceAll(/<\/?[^>]+(>|$)/gi, "");
}
