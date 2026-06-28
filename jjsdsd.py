def busca_binaria(vetor,target):
    e,d=-1,len(vetor)
    while e<d-1:
        m=(e+d)//2
        if vetor[m]==target:
            if m>0 and vetor[m-1]==target:
                e=e-1
            else:
                return m
        
        elif  vetor[m]<target:
            e=m
        else:
            d=m
    return -1


print(busca_binaria([1,1,1,1,1,1,1,1,1,1], 1))