# a = 3
# b = "123"

# var = a * b

# print(var)



def test():
    list_1 = [1, 2, 4]
    list_2 = [1, 3, 5]  
    # list_1.extend(list_2)
    # combined = list(set(list_1))
    # list_1.extend(list_2)
    # combined = set(list_1)
    combined = list(set(list_1.extend(list_2)))
    print(combined)

test()

# class Book:
#     def __init__( self, name, year, author_first, author_last ):
#         self.name = name
#         self.year = year
#         self.author = Author(author_first +author_last)

# class Author:
#     def __init__( self, first, last ):
#         self.first = first
#         self.last = last

# print(Book)