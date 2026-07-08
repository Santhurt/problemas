#pragma once

struct ListNode {
    int       val {};
    ListNode* next {};

    ListNode(int val = 0, ListNode* next = nullptr) : val(val), next(next) {
    }
};
