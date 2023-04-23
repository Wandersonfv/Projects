from tkinter import *

def widget(self,master,value1):
    self = Frame(master)
    self.pack()
    
    self.msg = Label(self, text=value1)
    self.msg.pack()

    self.input = Entry(self)
    self.input.pack()


