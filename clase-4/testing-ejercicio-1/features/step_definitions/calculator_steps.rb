require 'calculator'

When(/^I press the number (\d+)$/) do |number|
  @calculator = Calculator.new
  @calculator.first_operator(number)
end

And(/^the "([^"]*)" button$/) do |operator|
  @calculator.operator(operator)
end

And(/^the number (\d+)$/) do |number|
  @calculator.second_operator(number)
end

Then(/^I should see (\d+)$/) do |result|
  expect(result.to_i).to eq @calculator.calculate
end
