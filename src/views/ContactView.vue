<template>
  <div class="row justify-content-center w-100 fix-display">
    <div class="col-4 p-3 fix-display-2">
              <div class="card container-md dark-purple-bg brown-border">
                <div class="p-5 hide">
                  <img
                    src="https://i.postimg.cc/FKSMcmPK/C12-Taahirah-Ismail-crop.jpg"
                    alt="taahirah profile"
                    loading="lazy"
                    class="pfp"
                  />
                </div>
  
                <div class="text-center pb-3 brown-text">
                  <h2><strong>Taahirah Ismail</strong></h2>
                  <em>Web Developer</em> <br />
                  <br />
                  09/04/1999 <br />
                  Cape Town <br />
                  <br />
  
                  <div class="pt-3">
                    <a
                      href="mailto: taahirah.i@gmail.com"
                      target="_blank"
                      class="links"
                    >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjklEQVR4nO1YPYhTQRDeQwUVk5lEBYXTQ1EPTjOTEDxsJI0mM3dRC0lzhZ22FoIWgug12toIVoKdIlpYWIlgYSOilTZ6CCoInprzB/y7O9nokRj2JS8/757ifvA14e3M983O7NsXYzw8PDw8PJownk1sVcLrSlBVxvlYSTAjjNeKueQWEwbjGdishNOxC+c/KYRvyvnUxrYGlOBY3GI1iNnURFsDYzkcUsap2MVyM+GujKaTodqosmtwhTKcFsavsQsnqGoGj1YqZonpFLIDSQnuxSVeGG4Wt6c2mB4xoISHFnWwCV4pwUHTT4yNrF0nDJejrTjOKuHF0L3ugjCeFMJT5fz6lU4jlBJhfBZB1R9JNrkzqHhKeEkZLoQxMPs76JRmUup6xppThrNK+K3nqhN8VobjhYJZ6kg1oAyHhfHdwvNtDXQySEqJbcJ4u/uq4x0bI+g24IrdsYEQR1ltyO2bsgPxb4XhiCt/Pm+WCcMJZfziWtudgTofBPVpcSSZtgOojHMt1s/Zg6CcX7XGFaOUwd1C8LiVhl4N2G3/rgzn9w+vTrjWSxYLyvDEsfZpKQt7XGsOMKCN2TB/ERqoD99zIdznilEYMsuFYVII31sqwxn7mzNfNjUhjK/D5u2bgcYhD3VLbMJegk3CcKvTfH038IvwyQ5emPuKPS7tgaAMH7vJFZGBhbbCh0VOjgbFFoKcEN7vJYeJ0kDQdaD24iM8J4Q/eo1vojZQ3w14WRtkhklleNGvuGaxDERF4w2w34F530KtEHeLqB9i/sePUWH4ELdIDSJBtb0BwhuxC2U3hfBKWwOlTGK48SP6ryHhtGTSgyYM7Ee8El61f23HLxxmbOVDi/fw8PDw+K/wE59MlvecOxQ8AAAAAElFTkSuQmCC"
                      alt="mail"
                      class="icons"
                    />
                    </a>
                    <a
                      href="https://github.com/taahirahismail"
                      target="_blank"
                      class="links"
                    >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGUlEQVR4nO1ZXWgcVRQe//An7pwzG9MfrVZqtTXNnDPLaqlWiNJ2597dxPoSRQu+KKJWrUj1NeKDqJVqiSD4KD74ZlWqrbWPilQfGrGmplXEf7CG+p+qsXIms2azszN7Z7OzEcmBC2Fv7rn3O//njGUt0P+UKi44muEmzbhDE+zRjEcU44RiPBmuCc0wFu7tKHu4eTMDWv8FUiutsxXjFk24TxH+pRlPpVlyRjG8qT3nNuFldZqG1i07VxM8pAm+Tvv4eFDwlWJ4sH+5dU5HQGjX0ZrxWLsARBbhUZ9sPzMAonrNsCszAPUaYnhRNN9WEIN9XYsV4wedAqFntHNwE3UtagsIn+FSUXfHQfC/AWFc3jAnEMo7v0fC6HyB0DPrWLm3Z0lLICR6zIs5cbyZtRSiFcPz8/54rjczGGklxCYwhUcCsyvYVynCYUXweesPhDGf4eGShxxUB4Q7E8GwXTJPdk3yhHLzyyJmSDisGX7XjG9rF7cpcq6reLnLN9HiLlmaclfIb8rDezXDq5rhZ0V4/9CQdUYtr5KHnKwVHDcysSBjN5FiXPYtFq2zjKSV8L9+8YKlTbXo4rbmSc+g7Gh7oqqhcm/PEgNz/DJRK0EBaGDXpb7u1VkB0eysN3mD7zq3xjMh3GfCpMz2zdkBwa1GEYzhjYYMJGKYluKK4bGsgCjCF4yiHeGfam3ebiCJoCkyYAA/ikNmBaRcyF+pCf8wEijhYFQSjE8bSmJnViCqpBhfNnzLU1Y9hS1oc0dne62VMSkPhoyAMLwWPUw4bmKX/f3WmVkD8d3cKjMgeCRyWBMeNwBy3OoAldY4Fxv6yPeRwzLpaB6t8KRlWadlDaRCTt+s6DQ9jZnQjH/XvWkycrgaKXyG68MCbkWp185vLHRfKH9XVyeA1JKYsqQGWXK3VBUVzl9UI9jZpAlOhJvvaYJDivFTMSXF8K38XV2a7FusjEkRjMSbE/xadQPRUvQw4yfh5gEJsT7hAxKng4q1D0nazapUsgYybFmny10DRecS5eV7JVL67FSCypnwiWAWNh21xiKHNePeMGs/LtWlJnxGEb6iCN7RDKOBNhh/CHyJ8PaMtTEZ+sRnmuCwInxfMbyuCJ4LeqEw5zUsU6TsMAx5IolfRFNtB8FwVwOHTnrHo1EmLmwwZxDY6m+K4I52mFoweiV8Mh0IKV7hhgizgeLS80xCcDS3wLviS/WdnglJ5yjCCM023b2Mk7F9UdVPGuSPLdqFOyUBJeSY7zTBS4qce0RSao192caiA1XeG1bnuqWPkXGoItgu5YW0uy0AOBUKcE+8igkHY0MeO+ulBw8ebGZ222VCOSP9rkXym+y1/HiuucNzyolhL4gUjR1rVPaVZ1+tGH5KAiGg4+6QvTmDITwqb0m02yD0xjCQWF5TQuwNJiEzH3G+0IT7NeFA4gVB8nXunqNGthpNNxTDh6ntMgUFmo27g5v6xiHjCrzsOdcqxqkGDj3VrvwhQSG1XzBOKTe/LuVFkkUbSuSEDNZkSNfUThOoVLBXptcI7Ep90bSJ4YE0F6XJJcI/lTYI30ozAJxFMqVIY8tp+afwi8Nz/gJcLuByRfDxvAEh+Eg6RqsddOOq7pxUmh0HQri/7d/iA58hGGkUzdoNREl0Yng200FHxYWi9AfZAYFRv+BcY3WCRFISgmu/o8gH/7R8NME3NSCE132dGDdFSPJI0IIS7K6WL2loupWG3VIAziUnLdACWdnRP2XlMZMAxB7QAAAAAElFTkSuQmCC"
                      alt="gh"
                      class="icons"
                    />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/taahirah-ismail-702682189/"
                      target="_blank"
                      class="links"
                    >
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAByElEQVR4nO2ZQUsCQRTHJ4pO6XubXYMORVHwnmJ09ZDoPLXsIkRBt459hS4h9EH6DN1Kqw/SrcgiKD11McZT2OqsCe0o84f/RWZn34//m5l1VykvL68/qZTGqhA0haEjjN14DR0hbGjCvZEghPAy/uIx1JqhHj0JBwqWYSasREjDtJMDxfKQVAhv7SAM7bgLFXt7fUYAib9QiWAPItOUiGZ41hQc7m4kUsaa8VgIWxMHUqRk0ZXtWo2VyM5isn98PhvA5IHQ70cEczhNIsirEJ5UsgtLxr01wvgycSDikJUH4SlKREW4xj4GHsxZVNgKlmuban5/PZWQTHJbE54L4Zv7IIStEgV62L2rDKgZrp0GKWSSq9abK6VyOTUnDPfOgoyiIsOKEH45D1KrqVlrHQRXzoJowjMheOqNJXwUhtOBc6aDIydBhOFglP/f5XRizUkQzXAXDgLNsPF5y8NojCD4Hjan+X3AJTNOgow7r3gQ9omEyrcW+zWCftcSv/2GS/w5ovxblO5/W03Dhx4h+LCDEDZiL5SHWzPeWEHM+924CxWLixyUrSA9GIa6s2kQXESC+NFiFfP11I01A23TTpGT8PLyUv36Bmo9Jlq4u3/5AAAAAElFTkSuQmCC"
                      alt="li"
                      class="icons"
                    />
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <contact-form-comp class="fix-display-2"/>
  </div>
</template>

<script>
import ContactFormComp from "@/components/ContactForm-comp.vue";

export default {
  components: { ContactFormComp },
};
</script>

<style>
.pfp {
    width: 100%; 
    border: 3px solid #492F10;
    border-radius: 50%;
}

.icons {
  width: 50px;
  padding: 10px;
}

.icons:hover {
  transform: translate3D(0, -1px, 0) scale(1.3);
}

.purple-bg {
  background-color: #CA8A8B;
}

.brown-border-thin {
  border: 1px solid #492f10;
}

@media screen and (max-width: 900px) {
  .fix-display {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
  }

  .fix-display-2 {
    width: 100%;
    margin: auto;
  }

  .pfp {
    display: none;
  }
}
</style>
