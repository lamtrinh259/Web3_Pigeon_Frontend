import pandas as pd
import numpy as np

def create_new_user_and_task(wallet, task1, task2):
    users = {}
    users[wallet]['task_1'] = task1
    users[wallet]['task_2'] = task2
    return users


if __name__== '__main__':
    my_users = create_new_user_and_task('0x1234', 'Buy ice cream', 'Eat ice cream')
    print(my_users)
