class Calculator

  def first_operator(num)
    @first = num.to_i
  end

  def second_operator(num)
    @second = num.to_i
  end

  def operator(op)
    @operator = op
  end

  def calculate
    case @operator
      when 'plus'
        @first + @second
      when 'minus'
        @first - @second
      when 'times'
        @first * @second
      else
        @first / @second
    end
  end

end