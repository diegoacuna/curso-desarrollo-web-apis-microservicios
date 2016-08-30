class StringUtils

  def reverse(to_reverse)
    to_reverse.reverse
  end

  def ellipsize(to_ellipsize, n=50)
    to_ellipsize.length > n ? to_ellipsize[0..n-1] + "..." : to_ellipsize
  end

  def lorem(n=8)
    text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'.split

    (0..n-1).map{ |i| text[i % 8]}.join(' ')
  end

  def present(str_var, default)
    str_var.to_s == '' ? default : str_var
  end

end