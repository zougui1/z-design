export async function copyToClipboard(
  text: string,
): Promise<[success: boolean, error?: unknown]> {
  // Modern API (requires secure context: HTTPS or localhost)
  let modernError: unknown;
  try {
    await navigator.clipboard.writeText(text);
    return [true];
  } catch (err) {
    modernError = err;
  }

  // Fallback (works in more contexts, but less reliable)
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;

    // Prevent scrolling to bottom
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.opacity = "0";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const successful = document.execCommand("copy");
    document.body.removeChild(textarea);

    return [successful];
  } catch (err) {
    return [false, new AggregateError([modernError, err])];
  }
}
