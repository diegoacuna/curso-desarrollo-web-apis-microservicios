require 'string_utils'

RSpec.describe StringUtils do

  before :each do
    # FASE SETUP
    @str_utils = StringUtils.new
  end

  context "with a string" do

    it "reverses a string" do
      # FASE EJECUTAR
      reversed_str = @str_utils.reverse('hola mundo')

      # FASE VERIFICAR
      expect(reversed_str).to eq 'odnum aloh'

      # probemos con otro string
      reversed_str = @str_utils.reverse('chao mundo')

      expect(reversed_str).to eq 'odnum oahc'
    end

    # un caso muy general seria probar con un string aleatorio
    it "reverses a random string" do
      my_str = (0...8).map { (65 + rand(26)).chr }.join
      reversed_str = @str_utils.reverse(my_str)

      expect(reversed_str).to eq my_str.reverse
    end

    it "ellipsizes a long string" do
      my_str = (0...60).map { (65 + rand(26)).chr }.join
      e_str = @str_utils.ellipsize(my_str)

      expect(e_str).to eq (my_str[0..49]+'...')
    end

    it "doesn't ellipsizes a short string" do
      my_str = (0...40).map { (65 + rand(26)).chr }.join
      e_str = @str_utils.ellipsize(my_str)

      expect(e_str).to eq my_str
    end

    it "ellipsizes a 'n' length string" do
      my_str = (0...40).map { (65 + rand(26)).chr }.join
      e_str = @str_utils.ellipsize(my_str, 10)

      expect(e_str).to eq (my_str[0..9]+'...')
    end

    it "returns the string when exists" do
      my_str = 'hello world'
      e_str = @str_utils.present(my_str, 'default')

      expect(e_str).to eq 'hello world'
    end

    it "returns the default value when the string doesn't exists" do
      my_str = nil
      e_str = @str_utils.present(my_str, 'default')

      expect(e_str).to eq 'default'
    end

  end

  context "generate strings" do

    it "generates lorem text" do
      generated = @str_utils.lorem(10)

      expect(generated).to eq 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum'
    end

  end

end