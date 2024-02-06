---
---

# djb2 hash function

성능이 준수하면서 구현하기 쉬운 hash function입니다. 구현은 다음과 같습니다.

```c
unsigned long djb2(const char* str)
{
    unsigned long hash = 5381; // base
    int c;
    while (c = *str++)
    {
        hash = (((hash << 5) + hash) + c); // hash = hash * 33 + ascii code of str[i]
    }
    return hash % HASH_TABLE_SIZE;
}
```
