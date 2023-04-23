from tkinter import *
from components.widget.widget import widget

class app:
    def __init__(self, master=None):
        
        widget(self,master, 'Nome: ')
        widget(self,master,'Idade: ')        




root = Tk()

app(root)
root.mainloop()

