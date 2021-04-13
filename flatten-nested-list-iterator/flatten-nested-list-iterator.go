/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * type NestedInteger struct {
 * }
 *
 * // Return true if this NestedInteger holds a single integer, rather than a nested list.
 * func (this NestedInteger) IsInteger() bool {}
 *
 * // Return the single integer that this NestedInteger holds, if it holds a single integer
 * // The result is undefined if this NestedInteger holds a nested list
 * // So before calling this method, you should have a check
 * func (this NestedInteger) GetInteger() int {}
 *
 * // Set this NestedInteger to hold a single integer.
 * func (n *NestedInteger) SetInteger(value int) {}
 *
 * // Set this NestedInteger to hold a nested list and adds a nested integer to it.
 * func (this *NestedInteger) Add(elem NestedInteger) {}
 *
 * // Return the nested list that this NestedInteger holds, if it holds a nested list
 * // The list length is zero if this NestedInteger holds a single integer
 * // You can access NestedInteger's List element directly if you want to modify it
 * func (this NestedInteger) GetList() []*NestedInteger {}
 */

type NestedIterator struct {
    values []int
    size int
}

func Constructor(nestedList []*NestedInteger) *NestedIterator {
   var results []int
   var dfs func(m *NestedInteger)
    
    dfs = func(nestedList *NestedInteger) {
        if nestedList.IsInteger() {
            results = append(results, nestedList.GetInteger())
            return
        }
        
        listItems := nestedList.GetList()
        for _, listItem := range listItems {
            dfs(listItem) 
        }
    }
    
    for _, nestedListItem := range nestedList {
        dfs(nestedListItem) 
    }
    
    return &NestedIterator{
        values: results,
        size: len(results),
    }
}

func (this *NestedIterator) Next() int {
    result := this.values[0]
    this.values = this.values[1:]
    this.size--
    return result
}

func (this *NestedIterator) HasNext() bool {
    return this.size > 0 
}