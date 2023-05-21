class NgramSearchEngine {
    ngram(s, num) {
      const res_len = s.length - num + 1;
      const ngram = new Array(res_len);
  
      for (let i = 0; i < res_len; i++) {
        let ngram_one = '';
  
        for (let j = 0; j < num; j++) {
          ngram_one += s.charAt(i + j);
        }
        ngram[i] = ngram_one;
      }
  
      return ngram;
    }
  
    similarity(input, target) {
      const input_ngram = this.ngram(input, 2);
      const target_ngram = this.ngram(target, 2);
  
      let cnt = 0;
      for (const i of input_ngram) {
        for (const t of target_ngram) {
          if (i === t) {
            cnt += 1;
          }
        }
      }
  
      // const next = Math.nextUp(target_ngram.length);
  
      return cnt; // / next;
    }
  }