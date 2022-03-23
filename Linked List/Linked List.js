// creating a Linked List
// class Linked_node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }

// var prev = null
// var head = null
// var node1 = new Linked_node(7)   // new Linked_node (name used in class contructor) will create a new node
// var node2 = new Linked_node(4)   
// var node3 = new Linked_node(7)

// mark node1 as head of linked list
// head = node1
// console.log(node1,node2,node3,node4)

// join one node to next node 
// node1.next = node2
// node2.next = node3
// node2.prev = node1
// node3.prev = node2
// node4.prev = node3

// console.log(head.data)  // this will print data of Linked List 
// Always print head to see the linked list

// 1 ❗❗❗❗ insert Node At Head ❗❗❗❗

// function insertNodeAtHead(head, data) {
//     var a = new Linked_node(data)
//     a.next = head
//     head = a
//     return head
// }
// console.log(head)
// console.log(insertNodeAtHead(head, 10))
// console.log(insertNodeAtHead(head, 15))


// 2 ❗❗❗❗ insert Node At Tail ❗❗❗❗

// function insertNodeAtTail(head, data) {
//     var a = new Linked_node(data)
//     if(head == null){
//          return head = a
//     }else{
//         var cur = head
//         while(cur.next != null){
//             cur = cur.next
//         }
//         cur.next = a
//     }
//     return head
// }
// console.log(head)
// console.log(insertNodeAtTail(head, 10))
// console.log(insertNodeAtTail(head, 15))


// 3 ❗❗❗❗ insert Node At Position ❗❗❗❗

// function insertNodeAtPosition(head, data, position) {
//     var a = new Linked_node(data)
//     if(head == null){
//         head = a
//     } else {
//         if(position == 0){
//             a.next = head
//             head = a
//         } else {
//             var cur = head
//             for(var i = 0; i < position - 1; i++){
//                 cur = cur.next
//             }
//             a.next = cur.next
//             cur.next = a
//         }
//     }
//     return head
// }
// console.log(head)
// console.log(insertNodeAtPosition(head, 10,1))
// console.log(insertNodeAtPosition(head, 15,1))


// 4 ❗❗❗❗ Delete node from beginning ❗❗❗❗

// function deleteNodeAtBeginning(){
//     var temp = head
//     head = head.next
//     temp.next = null
//     // return temp   // to print removed item
//     return head      // to print remaining Linked List
// }
// console.log(deleteNodeAtBeginning())


// 5 ❗❗❗❗ Delete node from End ❗❗❗❗

// function DeleteNodeFromEnd(){
//     while(head.next.next != null){
//         head = head.next
//     }
//     var temp = head.next
//     head.next = null
//     return temp
// }
// console.log(DeleteNodeFromEnd())


// 6 ❗❗❗❗ Delete Node from any position  ❗❗❗❗

// function deleteNode(head, position) {
//     var cur = head
//     for(var i = 0; i < position - 1; i++){
//         cur = cur.next
//     }
//     cur.next = cur.next.next
//     return head
// }


// 7 ❗❗❗❗ Find Length of Linked List ❗❗❗❗

// function find_length(head){
//     var count = 0
//     while(head != null){
//         count++
//         head = head.next
//     }
//     console.log(count)
// }
// find_length(head)


// 8 ❗❗❗❗ Itrate over Linked List ❗❗❗❗

// function itrate(head){
//     while(head != null){
//         console.log(head.data)
//         head = head.next
//     }
// }
// itrate(head)


// 9 ❗❗❗❗ Reverse Linked List ❗❗❗❗

// function reverse(head) {
//     //  // Method 1
//     var nh = null
//     var arr = []
//     var cur = head

//     while(cur != null){
//         arr.push(cur)
//         cur = cur.next
//     }

//     nh = arr.pop()
//     cur = nh

//     while(arr.length > 0){
//         var t = arr.pop()
//         cur.next = t
//         cur = t
//     }
//     cur.next = null
//     return nh


//     //  // Method 2
//     // var prev = null
//     // while(head != null){
//     //     var nn = head.next
//     //     head.next = prev
//     //     prev = head
//     //     head = nn
//     // }
//     // return prev
// }
// console.log(head)
// console.log(reverse(head))


// 10 ❗❗❗❗ Nth Node from End ❗❗❗❗

// function nth_node(head,n){
//     //  // Method 1
//     var c = 0
//     var cur = head
//     while(cur != null){
//         c++
//         cur = cur.next
//     }
//     var p = c + 1 - n
//     var a = null
//     cur = head
//     for(var i = 0; i < p;i++){
//         a = cur
//         cur = cur.next
//     }
//     return a.data


//     //  // Method 2
//     // var f = head
//     // var s = head

//     // var count = 0
//     // while(count < n){
//     //     count++
//     //     s = s.next
//     // }

//     // while(s != null){
//     //     f = f.next
//     //     s = s.next
//     // }
//     // return f.data
// }
// console.log(nth_node(head,2))


// 11 ❗❗❗❗ Find Middle Node ❗❗❗❗

// var middleNode = function(head) {
//     var c = 0
//     var cur = head
//     while(cur != null){
//         c++
//         cur = cur.next
//     }
//     var mid = Math.ceil(c/2)
//     var a = null
//     var cur = head
//     if(c & 1){
//         for(var i = 0; i < mid;i++){
//             a = cur
//             cur = cur.next
//         }
//     } else {
//         for(var i = 0; i <= mid;i++){
//             a = cur
//             cur = cur.next
//         }
//     }
//     return a.data
// };
// console.log(middleNode(head))


// 12 ❗❗❗❗ Delete Node Without Head ❗❗❗❗

// function deleteNode(node){
//     var t = node.next
//     node.data = t.data
//     node.next = t.next
// }
// console.log(deleteNode(2))


// 13 ❗❗❗❗ Check Cycle in List ❗❗❗❗

// node4.next = node2 // by this it return true 
// var hasCycle = function (head) {

//     //    // Method 1
//     // var obj = {}
//     // var cur = head
//     // while(cur != null){
//     //     if(cur.data in obj){
//     //         return true
//     //     }
//     //     obj[cur.data] = 1
//     //     cur = cur.next
//     // }
//     // return false


//     //   // Method 2
//     // var slow = head
//     // var fast = head.next
//     // while(slow != null && fast != null && fast.next != null){
//     //     if(fast == slow){
//     //         return true
//     //     }
//     //     slow = slow.next
//     //     fast = fast.next.next
//     // }
//     // return false


//     //  // Method 3
//     var cur = head
//     while (cur != null) {
//         if (cur.visited == true) {
//             return true
//         }
//         cur.visited = true
//         cur = cur.next
//     }
//     return false
// };
// console.log(hasCycle(head))


    // 14 ❗❗❗❗ Check Palindrome ❗❗❗❗

// var node4 = new Linked_node(7)
// var node5 = new Linked_node(4)
// node3.next = node4
// node4.next = node5

// var isPalindrome = function (head) {
//     var s = ""
//     var cur = head
//     while( cur != null){
//         s += cur.data
//         cur = cur.next
//     }
//     var r = s.split("").reverse().join("")
//     if(s == r){
//         return true
//     }else{
//         return false
//     }
// };
// console.log(isPalindrome(head))


    // 15 ❗❗❗❗ Merge 2 sorted List ❗❗❗❗

// var mergeTwoLists = function(l1, l2) {
//     var nlist = new ListNode(-1)
//     var cur = nlist
//     while(l1 && l2){
//         if(l1.val < l2.val){
//             cur.next = l1
//             l1 = l1.next
//         } else {
//             cur.next = l2
//             l2 = l2.next
//         }
//         cur = cur.next
//     }
//     if(l1) cur.next = l1
//     if(l2) cur.next = l2
//     return nlist.next
// };


    // 16 ❗❗❗❗ Add 1 to list ❗❗❗❗

// var addOneToLinkedList = function(head) {
//     var rhead = reverse(head)
//     var carry = 1
//     var cur = rhead
    
//     while(cur != null && carry > 0){
//         var cd = cur.data
//         cur.data = (cd + carry) % 10
//         carry = parseInt((cd + carry) / 10)
//         cur = cur.next
//     }
//     var nhead = reverse(rhead)
//     if(carry > 0){
//         var nn = new LinkedListNode(carry)
//         nn.next = nhead
//         nhead = nn  
//     }
//     return nhead
// };
// function reverse(head){
//     var nh = null
//     var arr = []
//     var cur = head
//     while(cur != null){
//         arr.push(cur)
//         cur = cur.next
//     }
    
//     nh = arr.pop()
//     cur = nh
//     while(arr.length > 0){
//         var t = arr.pop()
//         cur.next = t
//         cur = t
//     }
//     cur.next = null
//     return nh
// }
// addOneToLinkedList(head)
// function itrate(head){
//     var a = ""
//     while(head != null){
//         a += head.data
//         head = head.next
//     }
//     console.log(a)
// }
// itrate(head)


    // 17 ❗❗❗❗ Remove Duplicates ❗❗❗❗

//  // Method 1
// var deleteDuplicates = function(head) {
//     var obj = {}
//     var a = []
//     var cur = head
//     while(cur != null){
//         obj[cur.data] = 1
//         cur = cur.next
//     }
    
//     for(var key in obj){
//         a.push(key)
//     }
    
//     var nhead = new Linked_node(-1)
//     var curr = nhead
//     while(a.length > 0){
//         var t = a.shift()
//         curr.next = new Linked_node(t);
//         curr = curr.next;
//     }
//     return nhead.next
// }
// console.log(deleteDuplicates(head))

//  // Method 2
// var deleteDuplicates = function(head) {
//     var cur = head
//     while(cur != null && cur.next != null){
//         if(cur.data == cur.next.data){
//             cur.next = cur.next.next
//         }else{
//             cur = cur.next
//         }
//     }
//     return head
// }
// console.log(deleteDuplicates(head))


    // 18 ❗❗❗❗ Add 2 Lists ❗❗❗❗

// var addTwoNumbers = function (l1, l2) {
    // var l1head = reverse(l1)
    // var l2head = reverse(l2)
    // var carry = 0
    // var l3 = new ListNode(-1)
    
    // while(l1head || l2head){
    //     var sum = carry
    //     if(l1head) {
    //         sum += l1head.val
    //         carry = 0
    //     }
    //     if(l2head) {
    //         sum += l2head.val
    //         carry = 0
    //     }
    //     var new_node = sum % 10
    //     carry = parseInt((sum) / 10)
    //     if(l1head) {
    //         l1head = l1head.next
    //     }
    //     if(l2head) {
    //         l2head = l2head.next
    //     }
    //     var nn = new ListNode(new_node)
    //     nn.next = l3
    //     l3 = nn
    // }
    
    
    // if(carry > 0){
    //     var nn = new ListNode(carry)
    //     nn.next = l3
    //     l3 = nn  
    // }
    // l3 = reverse(l3)
    // var temp = l3 
    // l3 = l3.next
    // temp.next = null
    // l3 = reverse(l3)
    // return (l3)
// };
// function reverse(head){
    // var prev = null
    // while(head != null){
    //     var nn = head.next
    //     head.next = prev
    //     prev = head
    //     head = nn
    // }
    // return prev
// }
// console.log(addTwoNumbers(l1,l2))


    // 19 ❗❗❗❗ Convert Array to Linked List ❗❗❗❗

// function array(a){
//     var nhead = new Linked_node(-1)
//     var curr = nhead
//     while(a.length > 0){
//         var t = a.shift()
//         curr.next = new Linked_node(t);
//         curr = curr.next;
//     }
//     return nhead.next
// }
// console.log(array([1,2,3,4,5]))


    // 20 ❗❗❗❗  ❗❗❗❗




    // 21 ❗❗❗❗  ❗❗❗❗




    // 22 ❗❗❗❗  ❗❗❗❗



