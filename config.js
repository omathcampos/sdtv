const whatsappMsg = encodeURIComponent('Olá! Vim pelo site e gostaria de solicitar um orçamento.')

export const config = {
  whatsapp: '13997700671',
  get whatsappUrl() { return `https://wa.me/55${this.whatsapp}?text=${whatsappMsg}` },
  telefone: '(13) 3301-0346',
  endereco: 'Rua Doutor Antonio Bento, 85 — Santos, SP',
  enderecoMaps: 'https://www.google.com/maps/search/?api=1&query=Rua+Doutor+Antonio+Bento+85+Santos+SP+11075260',
  cidade: 'Santos - SP',
  nomeEmpresa: 'SDTV Assistência Técnica',
  slogan: 'Especialistas em TV e Microondas em Santos',
  instagram: 'https://www.instagram.com/sdtvsantos/',
}
