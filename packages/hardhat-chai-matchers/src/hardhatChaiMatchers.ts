import "./types";
import { supportBigNumber } from "./bigNumber";
import { supportEmit } from "./emit";
import { supportReverted } from "./reverted/reverted";
import { supportRevertedWith } from "./reverted/revertedWith";
import { supportRevertedWithCustomError } from "./reverted/revertedWithCustomError";
import { supportRevertedWithPanic } from "./reverted/revertedWithPanic";
import { supportRevertedWithoutReasonString } from "./reverted/revertedWithoutReasonString";

export function hardhatChaiMatchers(
  chai: Chai.ChaiStatic,
  utils: Chai.ChaiUtils
) {
  supportBigNumber(chai.Assertion, utils);
  supportEmit(chai.Assertion);
  supportReverted(chai.Assertion);
  supportRevertedWith(chai.Assertion);
  supportRevertedWithCustomError(chai.Assertion, utils);
  supportRevertedWithPanic(chai.Assertion);
  supportRevertedWithoutReasonString(chai.Assertion);
}
