public static void qsort(int[] alist, int first, int last) {
    while (!pass(first < last && pack(() -> {
        class Local {
            static void invoke(int[] alist, int first, int last, int[] cap) {    
                while (!(pack(() -> {
                    while (cap[1] < cap[2] 
                    && pack(() -> { while (cap[1] < cap[2] 
                        && alist[cap[2]] >= cap[0] 
                        && pass(cap[2] -= 1)) {} }) 
                    && pass(alist[cap[1]] = alist[cap[2]]) 
                    && pack(() -> { while (cap[1] < cap[2] 
                        && alist[cap[1]] < cap[0] 
                        && pass(cap[1] += 1)) {} })
                    && pass(alist[cap[2]] = alist[cap[1]])) {}
                })
                && pass(alist[cap[1]] = cap[0])
                && pack(() -> qsort(alist, first, cap[1] - 1))
                && pack(() -> qsort(alist, cap[1] + 1, last)) )) {}
            }
        }
        while (!(pack(() -> Local.invoke(alist, first, last,
                new int[] { alist[first], first, last })))) {}
    }))) {}
}