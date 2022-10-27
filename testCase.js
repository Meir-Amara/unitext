describe('text Utils',()=>{
    it ("text greet",()=>{
        let result = getGreet("meir")

        expect(result).toEqual("hello meir")
    })
    it("test add",()=>{
        let total=add(2,1)
        expect(total).toEqual(3)

    })
})