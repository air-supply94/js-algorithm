## 前缀

- `非空`
- `不是s自身`
- 是包含 s[0] 的连续子串

## 前缀集

- 所有前缀的集合

## 后缀

- `非空`
- `不是s自身`
- 是包含 s[s.length - 1] 的连续子串

## 后缀集

- 所有后缀的集合

## 前后缀的最长匹配

前缀集和后缀集里面最长且相同的字符串

## PMT 表

- 本质上就是一个数组
- 每一项 PMT[i],表示的是一个字符串以 i 结尾的前后缀的最长匹配的长度

## kmp 原理

- s[i] === t[j] ---> i++; j++;
- s[i] != t[j] 下一个 j 就是 j - 1 结尾的字符串的前后缀最长匹配的长度(前缀和后缀匹配,除了 i 和 j 其它的都匹配)
