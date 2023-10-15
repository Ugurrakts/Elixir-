AOS.init({
  // Per öğe bazında geçersiz kılınabilen ayarlar, `data-aos-*` öznitelikleriyle:
  offset: 120, // orijinal tetikleme noktasına olan uzaklık (px cinsinden)
  delay: 0, // 0 ila 3000 arasında, 50ms adımlarla değerler
  duration: 900, // 0 ila 3000 arasında, 50ms adımlarla değerler
  easing: 'ease', // AOS animasyonları için varsayılan kolaylaştırma
  once: false, // animasyonun yalnızca bir kez gerçekleşip gerçekleşmeyeceği - aşağı kaydırılırken
  mirror: false, // öğelerin ekranın geçildiği sırada animasyon yapılıp yapılmayacağı
  anchorPlacement: 'top-bottom', // öğenin pencereye göre pozisyonunu tanımlar ve animasyonu tetikler

});
