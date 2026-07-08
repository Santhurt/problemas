import math
def countVocals(string = ""):
    count = 0;
    vocals = ['a', 'e', 'i', 'o', 'u']

    for ch in string:
        if ch.lower() in vocals:
            count+=1

    return count;

def longestPalindrome(string = ""):
    for i in range(10, 0, -1):
        for start in range(len(string) - i):
            if isPalindrome(string, start, start + i):
                return string[start:start+i]

    return ""

def isPalindrome(string, i, j):
    start = i;
    end = j - 1;

    while(start < end):
        if string[start] != string[end]:
            return False
        start+=1
        end-=1
    
    return True

def countRepeated(string):
    map = {}

    for i in range(len(string)):
        if string[i] in map:
            map[string[i]]=+1
        else:
            map[string[i]] = 1;

    return map;

def minimumString(strn = "", substrn = ""):
    if len(strn) == 0 or len(strn) < len(substrn):
        return ""

    need = {};

    for ch in substrn:
        if ch in need:
            need[ch] += 1
        else:
            need[ch] = 1

    window = {}
    required = need.keys().__len__()

    left = 0;
    formed = 0;

    bestLen = math.inf
    bestStart = 0

    for right in range(len(strn)):
        ch = strn[right]

        if ch in window:
            window[ch] += 1
        else:
            window[ch] = 1

        if ch in need and window[ch] == need[ch]:
            formed += 1


        while formed == required:
            if right - left + 1 < bestLen:
                bestLen = right - left + 1
                bestStart = left

            leftChar = strn[left]
            window[leftChar] -= 1

            if leftChar in need and window[leftChar] < need[leftChar]:
                formed -= 1

            left += 1

    return "" if bestStart == math.inf else strn[bestStart:bestStart + bestLen]

def longestSubstring(strn = ""):
    window = set()
    start = 0
    bestStart = 0
    bestLength = 0

    for right in range(len(strn)):
        ch = strn[right]

        while ch in window:
            window.remove(strn[start])
            start+=1

        window.add(ch);

        if right - start + 1 > bestLength:
            bestLength = right - start + 1
            bestStart = start


    return strn[bestStart:bestStart + bestLength]

def findMaxAvg(nums, k):
    sum = 0
    start = 0
    maxAvg = -math.inf

    for end in range(len(nums)):
        sum += nums[end]

        if end >= k - 1:
            currentAvg = sum / k
            maxAvg = currentAvg if currentAvg > maxAvg else maxAvg

            sum -= nums[start]
            start += 1

    return maxAvg

def maxVowels(s, k): 
    count = 0;
    maxCount = 0;
    vowels = {'a', 'e', 'i', 'o', 'u'}

    for end, ch in enumerate(s):
        if ch in vowels:
            count += 1

        if end >= k - 1 and ch in vowels:
            count-=1

        maxCount = count if count > maxCount else maxCount

    return maxCount

def checkInclusion(s1 = "", s2 = ""):
    target = {}
    window = {}
    start = 0

    for ch in s1:
        if ch in target:
            target[ch] += 1
        else:
            target[ch] = 1

    for end, ch in enumerate(s2):
        if ch in window:
            window[ch] += 1
        else:
            window[ch] = 1

        if end >= len(s1) - 1:
            if window == target:
                return True

            window[s2[start]] -= 1

            if window[s2[start]] == 0:
                window.pop(s2[start])

            start += 1

    return False


