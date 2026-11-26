import { mkdirSync, writeFileSync } from "node:fs";

// Roast the Smart Fridge: One Line, Best Laugh Wins.
//
// The roast: the fridge demands two-factor authentication to open the
// freezer, and the punchline lands on the comparison — the ice cream now
// has better security than the owner's bank account. One sentence, one
// line, no throat-clearing. The setup names a real smart-fridge behaviour
// (PIN / lock screens on the door are a genuine Family Hub-style feature,
// pushed one step further into 2FA) and the sting is a turn everyone
// recognises: the appliance guarding dessert harder than the bank guards
// money. It avoids the stock milk-reorder joke entirely and stays specific
// to this gadget's behaviour instead of smart homes in general.
const LINE =
  "My smart fridge asked for two-factor authentication to open the freezer — my ice cream now has better security than my bank account.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
