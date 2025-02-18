// This function takes a int and rounds it based on decimal points
// This function also does arithmetic rounding instead of javascripts default (banker's rounding)
function customToFixed(num, decimals = 2) {
  factor = Math.pow(10, decimals);
  return Math.round(num * factor) / factor;
}

module.exports = { customToFixed };
